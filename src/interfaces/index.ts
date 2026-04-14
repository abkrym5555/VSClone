export interface IFile {
  id: string;
  name: string;
  children?: IFile[];
  content?: string;
  isFolder: boolean;
}
