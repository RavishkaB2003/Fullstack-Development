export type ProjectCategory = 
| 'Web Design'
| 'Web Development'
| 'UI/UX Design'
|'BackEnd Development'




export interface Project {
    id: number;
    title: string;
    tag:ProjectCategory;
    colSpan?: string;
    description?: string;

}



