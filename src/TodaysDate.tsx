import { format } from 'date-fns'

const TodaysDate = () => {
    return <h1>{format(new Date(), "'Today is a' eeee")}</h1>
}
export default TodaysDate