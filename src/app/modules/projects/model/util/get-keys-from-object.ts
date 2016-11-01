
export class GetKeys {
  public static source: any;

  public static setSource(dimensions) {
    this.source = dimensions;
  }
  public static getIndexs(metadataId: string, stateName: string) {
    let indexDimension = this.source.map(function (item) { return item.metadataId; }).indexOf(metadataId);
    let indexState = this.source[indexDimension].states.map(function (item) { return item.name; }).indexOf(stateName);
    return {
      'dimension': indexDimension,
      'state': indexState
    }
  }
  public static getStateIndex(metadataId: string) {
    return this.source.indexOf({ metadataId: metadataId });
  }

}