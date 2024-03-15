export const calculateTimeToEvent = () => {
    const eventDate = new Date("03/17/2024 05:00:00"); // October 12, 2023, 9 AM PT
    const currentDate = new Date();
    const timeRemaining = eventDate.getTime() - currentDate.getTime();
  
    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
    return { days, hours, minutes, seconds };
  };

// export const calculateTimeToEvent = () => {
//   const eventDate = new Date("03/17/2024 05:00:00"); // October 12, 2023, 9 AM PT
//   const currentDate = new Date();
//   const timeRemaining = eventDate.getTime() - currentDate.getTime();

//   // Calculate hours, minutes, and seconds
//   const hours = Math.floor(timeRemaining % (1000 * 60 * 60)) / (1000 * 60 * 60);
//   const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

//   return { hours, minutes, seconds };
// };
