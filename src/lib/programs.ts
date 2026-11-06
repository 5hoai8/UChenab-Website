import data from '@/data/programs.json';
export type Program = typeof data[number];
export const programs=data;
export function filterPrograms(query:string,level:string,department:string){const q=query.trim().toLowerCase();return programs.filter(p=>(!q||(p.name+' '+p.department).toLowerCase().includes(q))&&(!level||p.level===level)&&(!department||p.department===department));}
