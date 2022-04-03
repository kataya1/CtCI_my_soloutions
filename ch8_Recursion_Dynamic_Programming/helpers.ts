interface elapsed{
    elapsedTime: String,
    functionOutput: any
}
export function measureTime( f: Function): elapsed{
    let start = performance.now()
    let output = f()
    let end = performance.now()
    
    return { 
        elapsedTime: `${end -  start} milliseconds `,
        functionOutput: output
    }
}