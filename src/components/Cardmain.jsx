import Card from "./Card";
import data from "./data.js"
export default function Cardmain(){
    const cards = data.map(
        (item)=>{
            return(
                <Card 
                    key={item.id}
                    {...item}
                />
            )
        }
    )
    return(
        <div>
            <section className="section-card">
                {cards}
            </section>
        </div>
    )
}