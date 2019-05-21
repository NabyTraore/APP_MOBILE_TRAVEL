import { ContentItem } from "../../FD/model/ContentItem";

export class RelationsItem {
  contentItemList: ContentItem[] = [];
  destination: string;
  origin: string;
  relationId: string;

  public containsContentItem(contentItem: ContentItem): boolean{
    this.contentItemList.forEach((item)=>{
      if (item.magisterCab.getFullCab() == contentItem.magisterCab.getFullCab()) {
        return true;
      }
    });
    return false;
  }
}