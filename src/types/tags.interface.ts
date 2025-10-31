export interface ITag {
  id: string;
  title: string;
}

export interface ITagsProps {
  className?: string;
  variant?: "statick" | "interactive";
  tags: ITag[];
  selectedTagId?: string;
  onSelect?: (tagId: string) => void; // Работает только если variant === 'interactive'
}
