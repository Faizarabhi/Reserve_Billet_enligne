import { useDispatch } from 'react-redux'
import { deleteTrip } from '../features/trip/tripSlice'

function TripItem({ trip }) {
  const dispatch = useDispatch()

//   return (
    // <div className='trip'>
    //   <div>{trip.price_trip}</div>
    //   <div>{trip.Arrival_time}</div>
    //   <div>{trip.price_trip}</div>
    //   <div>{trip.to}</div>
    //   <div>{trip.trip}</div>
    //   <div>{trip.from}</div>
    //   <div>{new Date(trip.createdAt).toLocaleString('en-US')}</div>
    //   <h2>{trip.text}</h2>
    //   <button onClick={() => dispatch(deleteTrip(trip._id))} className='close'>
    //     X
    //   </button>
    // </div>
  
//   )
  return (
    <div>
      <div className="mb-3">
        (vertical on small screen, horizontal on large screen)
      </div>
      <Card {...args} side="lg">
        <Card.Image
          src="https://api.lorem.space/image/shoes?w=400&h=225"
          alt="Shoes"
        />
        <Card.Body>
          <Card.Title tag="h2">Shoes!</Card.Title>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <Card.Actions className="justify-end">
            <Button color="primary">Buy Now</Button>
          </Card.Actions>
        </Card.Body>
      </Card>
    </div>
  )
}

export default TripItem