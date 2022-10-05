import { default as MapLibrary, Map as MaplibreMap } from 'maplibre-gl';
import { QueryFeature } from '.';
export default class maplibreTextTemplate {
    private _map;
    constructor(mapLibrary: typeof MapLibrary);
    evaluateText(expression: string | Array<any>, properties: {
        [key: string]: string;
    }, featureState?: QueryFeature['state']): HTMLParagraphElement;
    evaluateHtml(expression: string | Array<any>, properties: {
        [key: string]: string;
    }, featureState?: QueryFeature['state'], map?: MaplibreMap): HTMLDivElement;
    private _sectionToHtml;
    private _evaluate;
    private _drawIcon;
}
