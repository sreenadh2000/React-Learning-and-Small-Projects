import History from "./Images/Histo.jpg";
import Fields from "./Images/Fields.jpg";
import ItField from "./Images/History.jpg";
import ChildCards from "./ChildCards";

export default function Card() {
  const CardData = {
    History: {
      ImgUrl: History,
      CardTitle: `History of Mahindra`,
      CardText: ` The Mahindra logo you see above is quite an old one, more than half
    a century old. Sadly, the exact dates aren't available though. The
    logo is quite smartly designed; we see a fist holding a tool, a nod
    to the company's workmanship. The fingers of the hand form the two
    'M's of Mahindra & Mahindra, which is a brilliant detail.`,
    },
    Sectors: {
      ImgUrl: Fields,
      CardTitle: `Business Sectors`,
      CardText: `These are the thoughts one gets on hearing the name Mahindra. Huge –
      Founded in 1945 as a steel trading enterprise it has transformed
      itself into a group that has a presence in 22 industries across
      multiple sectors with a combined market capitalization of more than
      $18 billion and revenue of more than $20 billion. Sturdy - Its
      various businesses have stood the test of time and are largely
      self-sustainable and rugged just like its cars. Strong - Its
      strength lies in its 2.5 lac employees working at more than 55
      manufacturing facilities across the world and a network of
      innovation that spans across 11 countries.`,
    },
    It: {
      ImgUrl: ItField,
      CardTitle: `Launched Google Cloud Centre`,
      CardText: ` “Tech Mahindra's deep industry expertise and proven solutions that
      focus on seamless modernisation of infrastructure, applications and
      data to the Cloud, combined with the power of Google Cloud, will
      help accelerate the Cloud journey for enterprises as they move
      towards a digital-first future. As part of our TechMNXt charter,
      Tech Mahindra is focused on leveraging next-generation technologies
      to enable our customers drive growth and enhance customer
      experience,” Vivek Gupta, Global Head Cloud Services, Tech Mahindra,
      said in a statement.`,
    },
  };

  return (
    <div className="mt-3 card-group">
      <ChildCards CardData={CardData.History} />

      <ChildCards CardData={CardData.Sectors} />
      <ChildCards CardData={CardData.It} />
    </div>
  );
}
