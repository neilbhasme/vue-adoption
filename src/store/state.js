import cats from '../data/cats'
import dogs from '../data/dogs'

export default {
  cats,
  dogs,
  pets: [...cats, ...dogs] // flat the array instead of [[cats], [dogs]] if the dots were not used
}
