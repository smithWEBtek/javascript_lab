

// ----------------------------
// describe('arrowFunctionArg', function() {
//   it('gets called with 2 args', function() {
//     const spy = expect.spyOn(console, 'log').andCallThrough(arg1, arg2)

//     arrowFunction(arg1, arg2)

//     expect(spy).toHaveBeenCalledWith(arg1, arg2)

//     console.log.restore()
//   })
// })

describe('arrowFunction', function() {
  it('gets called', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough()

    arrowFunction()

    expect(spy).toHaveBeenCalledWith('I was called!')

    console.log.restore()
  })
})

// ---------------------------------------------------------------------
// these 2 tests will fight over the variable  global vs function-level, 
// comment out 1 or the other to see them pass, but don't run both at same time

describe('goToEleven', function() {
  it('shows global variable overwritten by function', function() {
    expect(goToEleven()).toEqual('11'),
    expect(volume).toEqual('11')
  })
})

// describe('returnEleven', function() {
//   it('shows return of function-level scoped variable', function() {
//     expect(returnEleven()).toEqual('11'), 
//     expect(volume).toEqual('10')
//   })
// }) 
// ---------------------------------------------------------------------


describe('makeLocalVariable', function() {
  it('shows return of function-level scoped variable', function() {
    expect(makeLocalVariable()).toEqual('sugar glider')
  })
})

describe('speakerReturn', function() {
  it('returns the `sentence` function-level scoped variable', function() {
    expect(speakerReturn()).toEqual('Bird is the word.')
  })
})

describe('speakerConsole', function() {
  it('console logs the `sentence` function-level scoped variable', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough()

    speakerConsole()

    expect(spy).toHaveBeenCalledWith('Bird is the word.')

    console.log.restore()
  })
})


describe('shout(string)', function() {
  it('receives one argument and returns it in all caps', function() {
    expect(shout('hello')).toEqual('HELLO')
  })
})

describe('medShout(string)', function() {
  it('receives one argument and returns it in all caps, but 1st letter lowercase', function() {
    expect(medShout('hello')).toEqual('hELLO')
  })
})

describe('whisper(string)', function() {
  it('receives one argument and returns it in all lowercase', function() {
    expect(whisper('HELLO')).toEqual('hello')
  })
})

describe('logShout(string)', function() {
  it('calls console.log() its one argument in all caps', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough()

    logShout('hello')

    expect(spy).toHaveBeenCalledWith('HELLO')

    console.log.restore()
  })
})

describe('logWhisper(string)', function() {
  it('calls console.log() its one argument in all lowercase', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough()

    logWhisper('HELLO')

    expect(spy).toHaveBeenCalledWith('hello')

    console.log.restore()
  })
})

describe('sayHiToGrandma(string)', function() {
  it('returns "I can\'t hear you!" if `string` is lowercase', function() {
    expect(sayHiToGrandma('hello')).toEqual("I can't hear you!")
  })

  it('returns "YES INDEED!" if `string` is uppercase', function() {
    expect(sayHiToGrandma('HELLO')).toEqual("YES INDEED!")
  })

  it('returns "I love you, too." if `string` is "I love you, Grandma."`', function() {
    expect(sayHiToGrandma("I love you, Grandma.")).toEqual("I love you, too.")
  })
})
