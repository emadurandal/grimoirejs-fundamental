import Matrix from "grimoirejs-math/ref/Matrix";
import IVariableInfo from "../IVariableInfo";
import IMaterialArgument from "../IMaterialArgument";
import UniformProxy from "../../Resource/UniformProxy";
import UniformResolverRegistry from "../UniformResolverRegistry";

UniformResolverRegistry.add("MODELVIEWPROJECTION", (valInfo: IVariableInfo) => (proxy: UniformProxy, args: IMaterialArgument) => {
  proxy.uniformMatrix(valInfo.name, args.transform.calcPVM(args.camera));
});

UniformResolverRegistry.add("LOCAL", (valInfo: IVariableInfo) => (proxy: UniformProxy, args: IMaterialArgument) => {
  proxy.uniformMatrix(valInfo.name, args.transform.localTransform);
});

UniformResolverRegistry.add("MODEL", (valInfo: IVariableInfo) => (proxy: UniformProxy, args: IMaterialArgument) => {
  proxy.uniformMatrix(valInfo.name, args.transform.globalTransform);
});

UniformResolverRegistry.add("VIEW", (valInfo: IVariableInfo) => (proxy: UniformProxy, args: IMaterialArgument) => {
  proxy.uniformMatrix(valInfo.name, args.camera.ViewMatrix);
});

UniformResolverRegistry.add("PROJECTION", (valInfo: IVariableInfo) => (proxy: UniformProxy, args: IMaterialArgument) => {
  proxy.uniformMatrix(valInfo.name, args.camera.ProjectionMatrix);
});

UniformResolverRegistry.add("MODELINVERSE", (valInfo: IVariableInfo) => (proxy: UniformProxy, args: IMaterialArgument) => {
  proxy.uniformMatrix(valInfo.name, Matrix.inverse(args.transform.globalTransform));
});

UniformResolverRegistry.add("VIEWINVERSE", (valInfo: IVariableInfo) => (proxy: UniformProxy, args: IMaterialArgument) => {
  proxy.uniformMatrix(valInfo.name, Matrix.inverse(args.camera.ViewMatrix));
});

UniformResolverRegistry.add("PROJECTIONINVERSE", (valInfo: IVariableInfo) => (proxy: UniformProxy, args: IMaterialArgument) => {
  proxy.uniformMatrix(valInfo.name, args.camera.InvProjectionMatrix);
});

UniformResolverRegistry.add("MODELVIEWINVERSE", (valInfo: IVariableInfo) => (proxy: UniformProxy, args: IMaterialArgument) => {
  proxy.uniformMatrix(valInfo.name, Matrix.inverse(args.transform.calcVM(args.camera)));
});

UniformResolverRegistry.add("MODELVIEWPROJECTIONINVERSE", (valInfo: IVariableInfo) => (proxy: UniformProxy, args: IMaterialArgument) => {
  proxy.uniformMatrix(valInfo.name, Matrix.inverse(args.transform.calcPVM(args.camera)));
});

UniformResolverRegistry.add("MODELINVERSETRANSPOSE", (valInfo: IVariableInfo) => (proxy: UniformProxy, args: IMaterialArgument) => {
  proxy.uniformMatrix(valInfo.name, Matrix.transpose(Matrix.inverse(args.transform.globalTransform)));
});

UniformResolverRegistry.add("MODELVIEWINVERSETRANSPOSE", (valInfo: IVariableInfo) => (proxy: UniformProxy, args: IMaterialArgument) => {
  proxy.uniformMatrix(valInfo.name, Matrix.transpose(Matrix.inverse(args.transform.calcVM(args.camera))));
});

export default null;