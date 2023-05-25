import { HeroList } from "../components/HeroList"
import { Publisher } from '../helpers/getHoroesByPublisher';

export const DcPage = () => {
  return (
    <>
      <h1>Dc Comics</h1>

      <HeroList publisher={"DC Comics"} />
    </>
  )
}
