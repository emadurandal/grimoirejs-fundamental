  import AssetAssetLoader from "./Asset/AssetLoader";
  import AssetCacheResolver from "./Asset/CacheResolver";
  import AssetExternalResourceResolver from "./Asset/ExternalResourceResolver";
  import AssetImageResolver from "./Asset/ImageResolver";
  import AssetTextFileResolver from "./Asset/TextFileResolver";
  import ComponentsAssetLoadingManagerComponent from "./Components/AssetLoadingManagerComponent";
  import ComponentsCameraComponent from "./Components/CameraComponent";
  import ComponentsCanvasInitializerComponent from "./Components/CanvasInitializerComponent";
  import ComponentsFullscreenComponent from "./Components/FullscreenComponent";
  import ComponentsGeometryComponent from "./Components/GeometryComponent";
  import ComponentsGeometryRegistoryComponent from "./Components/GeometryRegistoryComponent";
  import ComponentsHTMLBinderComponent from "./Components/HTMLBinderComponent";
  import ComponentsLoopManagerComponent from "./Components/LoopManagerComponent";
  import ComponentsMaterialComponent from "./Components/MaterialComponent";
  import ComponentsMaterialContainerComponent from "./Components/MaterialContainerComponent";
  import ComponentsMaterialImporterComponent from "./Components/MaterialImporterComponent";
  import ComponentsMaterialManagerComponent from "./Components/MaterialManagerComponent";
  import ComponentsMeshRendererComponent from "./Components/MeshRendererComponent";
  import ComponentsMouseCameraControlComponent from "./Components/MouseCameraControlComponent";
  import ComponentsRenderBufferComponent from "./Components/RenderBufferComponent";
  import ComponentsRendererComponent from "./Components/RendererComponent";
  import ComponentsRendererManagerComponent from "./Components/RendererManagerComponent";
  import ComponentsRenderQuadComponent from "./Components/RenderQuadComponent";
  import ComponentsRenderSceneComponent from "./Components/RenderSceneComponent";
  import ComponentsSceneComponent from "./Components/SceneComponent";
  import ComponentsTextureBufferComponent from "./Components/TextureBufferComponent";
  import ComponentsTextureComponent from "./Components/TextureComponent";
  import ComponentsTransformComponent from "./Components/TransformComponent";
  import ConvertersAngle2DConverter from "./Converters/Angle2DConverter";
  import ConvertersCanvasSizeConverter from "./Converters/CanvasSizeConverter";
  import ConvertersColor3Converter from "./Converters/Color3Converter";
  import ConvertersColor4Converter from "./Converters/Color4Converter";
  import ConvertersComponentConverter from "./Converters/ComponentConverter";
  import ConvertersEnumConverter from "./Converters/EnumConverter";
  import ConvertersGeometryConverter from "./Converters/GeometryConverter";
  import ConvertersMaterialConverter from "./Converters/MaterialConverter";
  import ConvertersNumberArrayConverter from "./Converters/NumberArrayConverter";
  import ConvertersNumberConverter from "./Converters/NumberConverter";
  import ConvertersObjectConverter from "./Converters/ObjectConverter";
  import ConvertersRotation3Converter from "./Converters/Rotation3Converter";
  import ConvertersTextureConverter from "./Converters/TextureConverter";
  import ConvertersVector2Converter from "./Converters/Vector2Converter";
  import ConvertersVector3Converter from "./Converters/Vector3Converter";
  import ConvertersVector4Converter from "./Converters/Vector4Converter";
  import ConvertersViewportConverter from "./Converters/ViewportConverter";
  import GeometryDefaultPrimitives from "./Geometry/DefaultPrimitives";
  import GeometryGeometry from "./Geometry/Geometry";
  import GeometryGeometryBuilder from "./Geometry/GeometryBuilder";
  import GeometryGeometryFactory from "./Geometry/GeometryFactory";
  import GeometryGeometryUtility from "./Geometry/GeometryUtility";
  import MaterialDefaultMacro from "./Material/DefaultMacro";
  import MaterialDefaultMaterial from "./Material/DefaultMaterial";
  import MaterialMacroRegistory from "./Material/MacroRegistory";
  import MaterialMaterial from "./Material/Material";
  import MaterialMaterialFactory from "./Material/MaterialFactory";
  import MaterialPass from "./Material/Pass";
  import MaterialTechnique from "./Material/Technique";
  import MaterialTextureReference from "./Material/TextureReference";
  import MaterialUniformResolverRegistry from "./Material/UniformResolverRegistry";
  import MaterialUniformsMatricesRegister from "./Material/Uniforms/MatricesRegister";
  import ResourceBuffer from "./Resource/Buffer";
  import ResourceFrameBuffer from "./Resource/FrameBuffer";
  import ResourceGLExtRequestor from "./Resource/GLExtRequestor";
  import ResourceProgram from "./Resource/Program";
  import ResourceRenderBuffer from "./Resource/RenderBuffer";
  import ResourceResourceBase from "./Resource/ResourceBase";
  import ResourceResourceCache from "./Resource/ResourceCache";
  import ResourceShader from "./Resource/Shader";
  import ResourceTexture2D from "./Resource/Texture2D";
  import ResourceUniformProxy from "./Resource/UniformProxy";
  import SceneRendererDrawPriorty from "./SceneRenderer/DrawPriorty";
  import SceneRendererRenderQueue from "./SceneRenderer/RenderQueue";
  import SceneRendererRenderQueueRegistry from "./SceneRenderer/RenderQueueRegistry";
  import SortImportResolver from "./Sort/ImportResolver";
  import SortNameSemanticsPair from "./Sort/NameSemanticsPair";
  import SortParser from "./Sort/Parser";
  import SortPreferences from "./Sort/Preferences";
  import SortSortTransformUtility from "./Sort/SortTransformUtility";
  import SortTypeToConstant from "./Sort/TypeToConstant";
  import UtilRotationParser from "./Util/RotationParser";
  import UtilTextureSizeCalculator from "./Util/TextureSizeCalculator";
  import __INTERFACE__1 from "./Geometry/GeometryBufferConstructionInfo";
  import __INTERFACE__2 from "./Geometry/IGeometryFactoryDelegate";
  import __INTERFACE__3 from "./Geometry/IndexBufferInfo";
  import __INTERFACE__4 from "./Geometry/VertexBufferAttribInfo";
  import __INTERFACE__5 from "./Material/IMaterialArgument";
  import __INTERFACE__6 from "./Material/IPassRecipe";
  import __INTERFACE__7 from "./Material/IState";
  import __INTERFACE__8 from "./Material/ITechniqueRecipe";
  import __INTERFACE__9 from "./Material/IVariableInfo";
  import __INTERFACE__10 from "./Messages/IBufferUpdatedMessage";
  import __INTERFACE__11 from "./Messages/IRenderRendererMessage";
  import __INTERFACE__12 from "./Messages/IResizeBufferMessage";
  import __INTERFACE__13 from "./Objects/CanvasSizeObject";
  import __INTERFACE__14 from "./Objects/RenderSceneArgument";
  import __INTERFACE__15 from "./SceneRenderer/IRenderable";
  import __INTERFACE__16 from "./SceneRenderer/IRenderArgument";

import __MAIN__ from "./main"

var __EXPOSE__ = {
  "Asset": {
    "AssetLoader": AssetAssetLoader,
    "CacheResolver": AssetCacheResolver,
    "ExternalResourceResolver": AssetExternalResourceResolver,
    "ImageResolver": AssetImageResolver,
    "TextFileResolver": AssetTextFileResolver
  },
  "Components": {
    "AssetLoadingManagerComponent": ComponentsAssetLoadingManagerComponent,
    "CameraComponent": ComponentsCameraComponent,
    "CanvasInitializerComponent": ComponentsCanvasInitializerComponent,
    "FullscreenComponent": ComponentsFullscreenComponent,
    "GeometryComponent": ComponentsGeometryComponent,
    "GeometryRegistoryComponent": ComponentsGeometryRegistoryComponent,
    "HTMLBinderComponent": ComponentsHTMLBinderComponent,
    "LoopManagerComponent": ComponentsLoopManagerComponent,
    "MaterialComponent": ComponentsMaterialComponent,
    "MaterialContainerComponent": ComponentsMaterialContainerComponent,
    "MaterialImporterComponent": ComponentsMaterialImporterComponent,
    "MaterialManagerComponent": ComponentsMaterialManagerComponent,
    "MeshRendererComponent": ComponentsMeshRendererComponent,
    "MouseCameraControlComponent": ComponentsMouseCameraControlComponent,
    "RenderBufferComponent": ComponentsRenderBufferComponent,
    "RendererComponent": ComponentsRendererComponent,
    "RendererManagerComponent": ComponentsRendererManagerComponent,
    "RenderQuadComponent": ComponentsRenderQuadComponent,
    "RenderSceneComponent": ComponentsRenderSceneComponent,
    "SceneComponent": ComponentsSceneComponent,
    "TextureBufferComponent": ComponentsTextureBufferComponent,
    "TextureComponent": ComponentsTextureComponent,
    "TransformComponent": ComponentsTransformComponent
  },
  "Converters": {
    "Angle2DConverter": ConvertersAngle2DConverter,
    "CanvasSizeConverter": ConvertersCanvasSizeConverter,
    "Color3Converter": ConvertersColor3Converter,
    "Color4Converter": ConvertersColor4Converter,
    "ComponentConverter": ConvertersComponentConverter,
    "EnumConverter": ConvertersEnumConverter,
    "GeometryConverter": ConvertersGeometryConverter,
    "MaterialConverter": ConvertersMaterialConverter,
    "NumberArrayConverter": ConvertersNumberArrayConverter,
    "NumberConverter": ConvertersNumberConverter,
    "ObjectConverter": ConvertersObjectConverter,
    "Rotation3Converter": ConvertersRotation3Converter,
    "TextureConverter": ConvertersTextureConverter,
    "Vector2Converter": ConvertersVector2Converter,
    "Vector3Converter": ConvertersVector3Converter,
    "Vector4Converter": ConvertersVector4Converter,
    "ViewportConverter": ConvertersViewportConverter
  },
  "Geometry": {
    "DefaultPrimitives": GeometryDefaultPrimitives,
    "Geometry": GeometryGeometry,
    "GeometryBuilder": GeometryGeometryBuilder,
    "GeometryFactory": GeometryGeometryFactory,
    "GeometryUtility": GeometryGeometryUtility
  },
  "Material": {
    "DefaultMacro": MaterialDefaultMacro,
    "DefaultMaterial": MaterialDefaultMaterial,
    "MacroRegistory": MaterialMacroRegistory,
    "Material": MaterialMaterial,
    "MaterialFactory": MaterialMaterialFactory,
    "Pass": MaterialPass,
    "Technique": MaterialTechnique,
    "TextureReference": MaterialTextureReference,
    "UniformResolverRegistry": MaterialUniformResolverRegistry,
    "Uniforms": {
      "MatricesRegister": MaterialUniformsMatricesRegister
    }
  },
  "Resource": {
    "Buffer": ResourceBuffer,
    "FrameBuffer": ResourceFrameBuffer,
    "GLExtRequestor": ResourceGLExtRequestor,
    "Program": ResourceProgram,
    "RenderBuffer": ResourceRenderBuffer,
    "ResourceBase": ResourceResourceBase,
    "ResourceCache": ResourceResourceCache,
    "Shader": ResourceShader,
    "Texture2D": ResourceTexture2D,
    "UniformProxy": ResourceUniformProxy
  },
  "SceneRenderer": {
    "DrawPriorty": SceneRendererDrawPriorty,
    "RenderQueue": SceneRendererRenderQueue,
    "RenderQueueRegistry": SceneRendererRenderQueueRegistry
  },
  "Sort": {
    "ImportResolver": SortImportResolver,
    "NameSemanticsPair": SortNameSemanticsPair,
    "Parser": SortParser,
    "Preferences": SortPreferences,
    "SortTransformUtility": SortSortTransformUtility,
    "TypeToConstant": SortTypeToConstant
  },
  "Util": {
    "RotationParser": UtilRotationParser,
    "TextureSizeCalculator": UtilTextureSizeCalculator
  }
};

let __BASE__ = __MAIN__();

Object.assign(__BASE__|| {},__EXPOSE__);

window["GrimoireJS"].lib.fundamental = __EXPOSE__;

export default __BASE__;
