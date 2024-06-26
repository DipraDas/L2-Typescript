{


    type Todo = {
        id: number;
        userId: number;
        title: string,
        completed: boolean
    }

    const getTodo = async (): Promise<Todo> => {
        const response = await fetch('https://jsonplaceholder.typicode.com/tode/1');
        const data = await response.json();
        return data;
    }

    // Promise

    type Something = { something: string }

    const createPromise = (): Promise<Something> => {
        return new Promise<{ something: string }>((resolve, reject) => {
            const data: { something: string } = { something: 'something' };
            if (data) {
                resolve(data);
            } else {
                reject('Failed to load data')
            }
        })
    }

    const showData = async (): Promise<Something> => {
        const data: Something = await createPromise();
        return data;
    }

    showData();
}