import { HttpHeaders, HttpParams } from '@angular/common/http';

interface SearchResults {
  id: number;
  email: string;
  password: string;
  checklists: [
    [
      {
        name: string;
        checklist: checklistItem[];
      }
    ]
  ];
}
interface checklistItem {
  id: number;
  task: string;
  done: boolean;
  active: boolean;
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
