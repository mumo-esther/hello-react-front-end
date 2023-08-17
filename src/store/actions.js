const fetchRandomGreeting = () => async (dispatch) => {
  try {
    const response = await fetch('http://127.0.0.1:3000/greetings/random');
    const data = await response.json();
    dispatch({ type: 'SET_RANDOM_GREETING', payload: data.greeting });
  } catch (error) {
    console.error('Error fetching greeting:', error);
  }
};

export default fetchRandomGreeting;
