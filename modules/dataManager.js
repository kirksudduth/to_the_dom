const URL = "http://localhost:5005";

export default {
    getQuestion() {
        return fetch(
            `${URL}/question`
        ).then((result) => result.json());
    },
}