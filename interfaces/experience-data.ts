export interface ExperienceModel {
    // data: ExperinceItemModel;
    colspan?: string;
    role: string;
    company: string;
    companylogo: string;
    date: string;
    desc?: string;
    descBullets?: string[];
}


export interface ExperinceItemModel{
    role: string;
    company: string;
    companylogo: string;
    date: string;
    desc?: string;
    descBullets?: string[];
}