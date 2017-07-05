 export class helpers {
     static formatBody(data: Object) {
        let result = [];

        Object.keys(data).forEach((k: string) => {
            result.push(`${k}=${encodeURIComponent(data[k])}`);
        });

        return result.join('&');
    }
 }