class Request {
    async request({ url = 'https://ajax.test-danit.com/api/v2/cards', method = 'POST', data = null, token = '' }) {
        return await fetch(`${url}`, {
            method: `${method}`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                title: `${data.title}`,
                description: `${data.description}`,
                doctor: `${data.doctor}`,
                age: `${data.age}`,
                weight: `${data.weight}`,
                full_name: `${data.full_name}`,
                priority: `${data.priority}`,
                pressure: `${data.pressure}`,
                mass_index: `${data.mass_index}`,
                diseases: `${data.diseases}`,
                data_pressure: `${data.data_pressure}`,
                age_therapevt: `${data.age_therapevt}`,
                register_data: `${data.register_data}`,
                register_time: `${data.register_time}`,
            })
        })
            .then(response => response.json())
    }
}
const request = new Request();

export default request;