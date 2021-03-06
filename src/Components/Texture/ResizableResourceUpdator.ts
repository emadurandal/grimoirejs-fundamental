import IAttributeDeclaration from "grimoirejs/ref/Node/IAttributeDeclaration";
import BasicComponent from "../BasicComponent";
import ConstantSizeResourceResizer from "./ConstantSizeResourceResizer";
import ResourceResizerComponent from "./ResourceResizerComponentBase";
import ViewportSizeResourceResizer from "./ViewportSizeResourceResizer";
/**
 * Abstract class of ResizableResource container.
 */
export default class ResizableResourceUpdator extends BasicComponent {
    public static resizers: { [key: string]: typeof ResourceResizerComponent } = {
        ViewportSize: ViewportSizeResourceResizer,
        Constant: ConstantSizeResourceResizer,
    };

    public static attributes: { [key: string]: IAttributeDeclaration } = {
        resizerType: {
            converter: "String",
            default: "Constant",
        },
    };

    /**
     * Resize texture buffer
     * @param width
     * @param height
     */
    public resize(width: number, height: number): void {
        // Nothing to do here. Resize features are depends on what resouces are managed by for each classes.
        // These should be considered by the classes override this class.
    }

    public $awake(): void {
        const resizer = this.node.getComponent(ResourceResizerComponent);
        if (!resizer) {
            const resizerType = this.getAttribute("resizerType");
            const resizerCtor = ResizableResourceUpdator.resizers[resizerType];
            if (!resizerCtor) {
                throw new Error(`Specified resizer '${resizerType}' is not yet registered to resizable resource updator`);
            }
            setImmediate(() => {
                this.node.addComponent(resizerCtor); // darkside
            });
        }
    }

}
