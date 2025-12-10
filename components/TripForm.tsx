'use client';
import { Calendar } from '../components/ui/calendar';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
const TripForm = () => {
  const [pickupDate, setPickupDate] = useState<Date | undefined>(new Date());
  const [dropoffDate, setDropoffDate] = useState<Date | undefined>(new Date());
  const [showPickupCalendar, setShowPickupCalendar] = useState(false);
  const [showDropoffCalendar, setShowDropoffCalendar] = useState(false);
  const router = useRouter();
     // Toggle calendar visibility when the field is clicked
    const handleCalendarFieldClick = (id: string) => {
    //  setShowPickupCalendar(!showPickupCalendar);
      if (id === 'pickupDate') {
        setShowPickupCalendar(!showPickupCalendar);
      } else {
        setShowDropoffCalendar(!showDropoffCalendar);
      }
    };

    const handleCarTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log('Car type changed', e.target.value);
    }
     // Handle date selection and hide calendar
    const handleDateSelect = (selectedDate: Date, id: string) => {
     // Set the selected date
      if (id === 'pickupDateId') {
        setShowPickupCalendar(false);
        setPickupDate(selectedDate);
      } else if (id === 'dropoffDateId') {
        setShowDropoffCalendar(false);
        setDropoffDate(selectedDate);
      }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const {carType, pickupDate, dropoffDate} = e.target as HTMLFormElement;
      
      router.push(`/listing`);
      console.log('Form submitted');
  }

  return (
    <form className="trip-form" onSubmit={handleSubmit}>
            
            <div className="row align-items-center">
              
              <div className="mb-3 mb-md-0 col-md-3">
                <select name="carType" id="carType" className="custom-select form-control" onChange={handleCarTypeChange}>
                  <option value="" >Select Type</option>
                  <option value="ferrari">Ferrari</option>
                  <option value="toyota">Toyota</option>
                  <option value="ford">Ford</option>
                  <option value="lamborghini">Lamborghini</option>
                </select>
              </div>
              <div className="mb-3 mb-md-0 col-md-3">
                <div className="form-control-wrap">
                    <input type="text" 
                      readOnly
                      onClick={(e: React.MouseEvent<HTMLInputElement>) =>handleCalendarFieldClick(e.currentTarget.id)} 
                      id="pickupDate" name="pickupDate" placeholder="Pick up" value={pickupDate.toLocaleDateString()} className="form-control datepicker px-3" />
                  
                      {showPickupCalendar && (
                        <Calendar
                          mode="single"
                          required
                          selected={pickupDate}
                          id="pickupDate"
                          onSelect={(date: Date) => handleDateSelect(date, 'pickupDateId')}
                          className="rounded-lg border mt-2 absolute top-0 left-0"
                        />
                      )}

                </div>
              </div>
              <div className="mb-3 mb-md-0 col-md-3">
                <div className="form-control-wrap">
                  <input type="text" 
                  readOnly
                  onClick={(e: React.MouseEvent<HTMLInputElement>) =>handleCalendarFieldClick(e.currentTarget.id)} 
                  id="dropoffDate" name="dropoffDate" placeholder="Drop off" value={dropoffDate?.toLocaleDateString()} className="form-control datepicker px-3" />
                  
                  {showDropoffCalendar && (
                    <Calendar
                      mode="single"
                      required={true}
                      selected={dropoffDate}
                      onSelect={(date: Date) => handleDateSelect(date, 'dropoffDateId')}
                      id="dropoffDate"
                      className="rounded-lg border mt-2 absolute top-0 left-0"
                    />
                  )}
                  
                </div>
              </div>
              <div className="mb-3 mb-md-0 col-md-3">
                <button type="submit" className="btn btn-primary btn-block py-3">Search Now</button>
      </div>
    </div>
  </form>
);
};

export default TripForm;