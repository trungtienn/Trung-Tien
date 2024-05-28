function handleExeption(errorMessage: string): never {
    throw Error(errorMessage)
}

handleExeption("just a test error");