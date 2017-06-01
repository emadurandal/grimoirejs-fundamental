import gr from "grimoirejs";
import GeometryFactory from "../Geometry/GeometryFactory";
import Geometry from "../Geometry/Geometry";
import Component from "grimoirejs/ref/Node/Component";
import GrimoireInterface from "grimoirejs";
import IAttributeDeclaration from "grimoirejs/ref/Node/IAttributeDeclaration";

/**
 * ジオメトリを管理するコンポーネント
 * あまりユーザーが直接操作することはありません。
 */
export default class GeometryRegistoryComponent extends Component {
  public static attributes: { [key: string]: IAttributeDeclaration } = {
    /**
     * デフォルトで生成するジオメトリの種類
     */
    defaultGeometry: {
      converter: "StringArray",
      default: ["quad", "cube", "sphere"]
    }
  };

  private _geometries: { [key: string]: Geometry } = {};

  private _factory: GeometryFactory;

  public $awake(): void {
    this._factory = new GeometryFactory(this.companion.get("gl"));
    this.companion.set(this.name, this);
    this.companion.set(this.name.ns.for("GeometryFactory"), this._factory);
    for (let geometry of this.getAttribute("defaultGeometry") as string[]) {
      this.addGeometry(geometry, this._factory.instanciateAsDefault(geometry));
    }
  }

  public addGeometry(name: string, geometry: Geometry): void {
    this._geometries[name] = geometry;
  }

  public removeGeometry(name: string): void {
    if (this._geometries[name]) {
      delete this._geometries[name];
    }
  }

  public getGeometry(name: string): Geometry {
    return this._geometries[name];
  }
}
