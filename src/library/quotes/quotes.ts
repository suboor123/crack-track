import axios from 'axios';

export class Quotes {
    private static API_CONFIG = {
        API_KEY: 'ca345a5642msh91979b47daccfe0p172399jsn667cfebe1cb7',
        API_HOST: 'motivational-quotes1.p.rapidapi.com',
        API_ENDPOINT: 'https://motivational-quotes1.p.rapidapi.com/motivation',
        BODY: '{"key1":"value","key2":"value"}',
    };

    private static headers = {
        'content-type': 'application/json',
        'X-RapidAPI-Key': this.API_CONFIG.API_KEY,
        'X-RapidAPI-Host': this.API_CONFIG.API_HOST,
    };

    public static async generate(): Promise<string> {
        const response = await axios.post(
            this.API_CONFIG.API_ENDPOINT,
            { body: this.API_CONFIG.BODY },
            { headers: this.headers }
        );
        return response.data;
    }

    public static async generateMultiple(counts = 5) {
        const promises = [];
        for (let x = 0; x < counts; x++) {
            promises.push(this.generate());
        }
        const quotes = Promise.all(promises);
        return quotes;
    }
}
