import { HttpHeaders, HttpParams } from '@angular/common/http';

interface SearchResults {
  id: number;
  email: string;
  company: string;
  name: string;
  password: string;
  overallComments: string;
  checklists: checklistItem[];
}
interface checklistItem {
  id: number;
  title: string;
  value: number;
  signedBy: string;
  signedDate: number;
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
