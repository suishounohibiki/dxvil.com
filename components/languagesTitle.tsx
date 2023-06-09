export default function LanguagesTitle() {
    return(
      <div className="flex max-w-[100%] flex-col items-end gap-2">
          <h1 className="text-right text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-blue-500  to-indigo-600 bg-clip-text text-transparent"> TypeScript. </span>
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> JavaScript. </span>
            <br className="inline" />
          Not just a language.
          </h1>
        <p className="text-muted-foreground max-w-[700px] text-right text-lg sm:text-xl">
        The pure ❤️ of 
        <span className="bg-gradient-to-r from-blue-500  to-indigo-600 bg-clip-text font-bold text-transparent"> front-end</span> and 
        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text font-bold text-transparent"> back-end </span>
        in an endless loop of capabilities of creativity.
        </p>
      </div>
    )
}