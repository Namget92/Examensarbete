import { HttpHeaders, HttpParams } from '@angular/common/http';

interface User {
  id: number;
  email: string;
  company: string;
  name: string;
  password: string;
}
interface Company {
  id: number;
  name: string;
  checklist: checklistItem[];
  comments: string;
  commentsBeingEdited: boolean;
}

interface checklistItem {
  id: number;
  title: string;
  value: number;
  signedBy: string;
  signedDate: string;
  isBeingEdited: boolean;
}

type options = {
  headers?: HttpHeaders | { [header: string]: string | string[] };
  observe?: 'body' | 'events' | 'response';
  params?:
    | HttpParams
    | {
        [param: string]:
          | string
          | number
          | boolean
          | ReadonlyArray<string | number | boolean>;
      };
  reportProgress?: boolean;
  responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
  withCredentials?: boolean;
};
