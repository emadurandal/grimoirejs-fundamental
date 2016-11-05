import TransformComponent from "./TransformComponent";
import GomlNode from "grimoirejs/lib/Node/GomlNode";
import IRenderMessage from "../Messages/IRenderMessage";
import CameraComponent from "./CameraComponent";
import Component from "grimoirejs/lib/Node/Component";
import IAttributeDeclaration from "grimoirejs/lib/Node/IAttributeDeclaration";
import {Vector4, Matrix} from "grimoirejs-math";

export default class HTMLBinderComponent extends Component {
  public static attributes: { [key: string]: IAttributeDeclaration } = {
    htmlQuery: {
      defaultValue: undefined,
      converter: "String"
    },
    targetRenderer: {
      defaultValue: "render-scene",
      converter: "String"
    }
  };

  private _targetNode: GomlNode;

  private _htmlQuery: string;

  private _rendererQuery: string;

  private _queriedElement: HTMLElement;

  private _parentCache: Element;

  private _canvasContainer: HTMLDivElement;

  private _currentTransform: TransformComponent;

  private _styleCache: { [key: string]: any };

  private _isFirstCall: boolean = true;

  public $awake(): void {
    this._canvasContainer = this.companion.get("canvasContainer") as HTMLDivElement;
    this._currentTransform = this.node.getComponent("Transform") as TransformComponent;
  }

  public $mount(): void {
    this._canvasContainer = this.companion.get("canvasContainer") as HTMLDivElement;
    this._currentTransform = this.node.getComponent("Transform") as TransformComponent;
  }

  public $treeInitialized(): void {
    this.getAttribute("targetRenderer").addObserver((v) => {
      if (this._rendererQuery !== v.Value) {
        this._onRendererChanged();
      }
    }, true);
    this.getAttribute("htmlQuery").addObserver((v) => {
      this._onQueryChanged(v.Value);
    }, true);
  }

  public $render(args: IRenderMessage): void {
    if (this._isFirstCall) {
      this._onRendererChanged();
      this._isFirstCall = false;
    }
    if (this._queriedElement && args.caller.node === this._targetNode) {
      const vp = args.viewport;
      const rawPos = Matrix.transform(this._currentTransform.calcPVM(args.camera.camera), new Vector4(0, 0, 0, 1));
      const rawScPos = {
        x: rawPos.X / rawPos.W,
        y: rawPos.Y / rawPos.W,
        z: rawPos.Z / rawPos.W
      };
      if (rawScPos.z >= -1 && rawScPos.z <= 1) {
        const scPos = {
          x: vp.Left + (rawScPos.x + 1) / 2 * vp.Width,
          y: vp.Top + (rawScPos.y + 1) / 2 * vp.Height,
        };
        this._queriedElement.style.visibility = "visible";
        this._queriedElement.style.left = scPos.x + "px";
        this._queriedElement.style.bottom = scPos.y + "px";
      } else {
        this._queriedElement.style.visibility = "hidden";
      }
    }
  }

  /**
   * Restore default position of queried html
   */
  private _restoreDefault(): void {
    this._canvasContainer.removeChild(this._queriedElement)
    this._parentCache.appendChild(this._queriedElement);
    const s = this._queriedElement.style;
    const c = this._styleCache;
    s.position = c["position"];
    s.left = c["left"];
    s.bottom = c["bottom"];
    s.visibility = c["visibility"];
  }

  private _beginTrack(): void {
    this._parentCache.removeChild(this._queriedElement);
    this._canvasContainer.appendChild(this._queriedElement);
    this._queriedElement.style.position = "absolute";
  }

  private _onRendererChanged(): void {
    let returned = false;
    this.tree(this.getValue("targetRenderer")).forEach(n => { // should be obtained by get api
      if (returned) {
        return true;
      } else {
        this._targetNode = n;
        returned = true;
      }
    });
  }

  private _onQueryChanged(query: string): void {
    let queried: NodeListOf<Element>;
    if (query && query !== "") { // when query is not empty
      queried = document.querySelectorAll(query);
    }
    if (this._queriedElement) { // If there was selected element last time.
      this._restoreDefault();
    }
    if (!queried || queried.length === 0) { // If new queried object is empty
      this._queriedElement = undefined;
      this._parentCache = undefined;
    } else { // If there was object to track
      this._queriedElement = queried.item(0) as HTMLElement;
      const s = this._queriedElement.style;
      this._styleCache = {
        position: s.position,
        visibility: s.visibility,
        left: s.left,
        bottom: s.bottom
      };
      this._parentCache = this._queriedElement.parentElement;
      this._beginTrack();
    }
  }
}