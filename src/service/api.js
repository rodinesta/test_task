export const getData = async () => {
    const res = await fetch("http://contest.elecard.ru/frontend_data/catalog.json")
    if (res.ok) {
        let data = await res.json()
        return data
    } else {
        alert("Ошибка при получении данных: " + res.status)
    }
}