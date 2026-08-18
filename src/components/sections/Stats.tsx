import { Container } from "@/components/ui/Container";import { Reveal } from "@/components/ui/Reveal";
const items=[['15+','años de experiencia'],['Atención','Personalizada'],['Enfoque','Corporativo'],['Alcance','Integral']];
export function Stats(){return <section className="stats" aria-label="Experiencia y enfoque"><Container><Reveal className="stats__grid">{items.map(([a,b])=><div className="stat" key={a}><strong>{a}</strong><span>{b}</span></div>)}</Reveal></Container></section>}
