const optimize = async (inputData) => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:8000/optimize/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({data_path: inputData.data_path})
      });
      if (!response.ok) throw new Error('Optimization failed');
      const data = await response.json();
      setResults(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  