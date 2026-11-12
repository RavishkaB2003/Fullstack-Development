import {  type Project } from '../types/project'

const MOCK_PROJECTS: Project[] = [
    {id: 1, title: 'Project 1', tag: 'Web Design', colSpan: 'md:col-span-2'},
    {id: 2, title: 'Project 2', tag: 'Web Development'},
    {id: 3, title: 'Project 3', tag: 'UI/UX Design'},
    {id: 4, title: 'Project 4', tag: 'BackEnd Development', colSpan: 'md:col-span-2'}
]

export const getProjects = async () : Promise<Project[]> => {
    return MOCK_PROJECTS;
};