open System.IO

[<EntryPoint>]
let main argv =
    let mutable exitCode = 0
    let str: string option  = 
        try 
            Some (File.ReadAllText("input.txt"))
        with 
            | :? IOException -> printfn "File can not be readed!"; None;

    match str with 
        | Some x -> printfn "%s" x
        | None -> exitCode <- -1
    
    exitCode
    