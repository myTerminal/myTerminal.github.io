# 5+ ways how Rust makes you a better programmer: An initial review of my new favorite programming language

With my recent dive into Rust as a low-level programming language and brief experience in its eco-system, it managed to impress the programmer in me.

> Through balancing powerful technical capacity and a great developer experience, Rust gives you the option to control low-level details (such as memory usage) without all the hassle traditionally associated with such control. - [RustLang Book](https://doc.rust-lang.org/1.30.0/book/2018-edition/ch00-00-introduction.html)

It feels like it tries to protect me from the remotest potential trouble I might run into unless it feels that the code that I write is 100% safe.

> In Rust, the compiler plays a gatekeeper role by refusing to compile code with these elusive bugs, including concurrency bugs. - [RustLang Book](https://doc.rust-lang.org/1.30.0/book/2018-edition/ch00-00-introduction.html)

Upon reading the initial few sections of [the Rust Lang documentation](https://doc.rust-lang.org/1.30.0/book/2018-edition/ch00-00-introduction.html) (and this would probably be the first time I'm reading the documentation for a programming language with such great detail), it didn't take me long to come up with the below-mentioned reasons for how Rust tries to make me a better programmer.

## A mutation is only allowed when explicitly declared in advance

All variables in Rust are immutable by default. Once set, the value of a variable cannot be changed unless the variable was explicitly declared as mutable back when it was first declared.

    let my_name = "John";
    my_name = "James";

The above would fail to compile as the variable `my_name` is immutable. However, if you would have declared it to be 'mutable', it can very well be changed later on.

    let mut my_name = "John";
    my_name = "James";

This might appear to be very limiting at first but it helps eliminate potential bugs occurring when a part of your program assumes that it is the only one making changes to the value of a variable but it has been changed from elsewhere as well. It also automatically makes your programs concurrency ready.

## You can use the same name for multiple variables

In many programming languages, a variable can be shadowed when an inner-scope uses a variable of the same as the one outside. For example, in the below arguably useless JavaScript snippet, the variable `i` is shadowed:

    const i = 0;

    if (someResult) {
        const i = 1;
        someFunction(i);
    }

Even though a variable `i` exists in the outer scope with a value `0`, the value passed to the function `someFunction` will be from the one in the inner scope and will be `1`.

In Rust, you can shadow a variable in the same scope. It can help you condition or polish a value and store it in a variable of the same name rather than having multiple variations of a variable.

So, instead of

    let spaces = "   ";
    let spaces_len = spaces.len();

you can write

    let spaces = "   ";
    let spaces = spaces.len();

and then refer to the count of spaces using the variable `spaces`, rather than having to maintain two separate variables, one containing the actual spaces as a `String` and another one to hold the count as an `int`.

## It encourages you to handle potential failures explicitly

Many operations in Rust return you a value of type `io::Result`, which is an enumeration of possible outcomes of an operation, `Ok` and `Err`, the first indicating that the operation was successful while the other indicating that something went wrong.

The below line would read user input from the terminal and store the result in the specified variable `user_input`:

    std::io::stdin().read_line(&mut user_input)
        .expect("Failed to read line");

Though the call `read_line` would work on its own, calling `expect` on the result of the operation prevents Rust from complaining that a potential failure was not handled. Please note that this is not the best way to handle failures, but a practical solution would be way outside the scope of this article.

## Using multiple `return`s in a function is discouraged, softly

Though there is a `return` keyword in Rust just like most other programming languages, I've seen something in a lot of examples that I find very interesting: being able to return values from a function (or a scope, more on that later), without having to explicitly use the keyword.

I relate it to the [Lisp](https://en.wikipedia.org/wiki/Lisp_(programming_language)) family of languages where everything is a list. Even a function is a list of expressions and the return value is the last item in the list.

Consider the below code in Lisp:

    (defun add (a b)
        (message (concat "You passed "
                         (number-to-string a)
                         " and "
                         (number-to-string b)))
        (+ a b))

You would've noticed that the above function definition doesn't contain a `return` keyword and yet returns the sum of the two input arguments. This does not only save you a few key-strokes while typing the code but also makes you a better programmer by encouraging you to design your functions such that they only have a single return path and hence are easier to be interpreted.

An equivalent code in Rust would look like below:

    fn add(a: i32, b: i32) -> i32 {
        println!("You passed {} and {}", a, b);
        a + b
    }

Notice the absence of a `;` at the end of the last line of the function `add`, which makes it a return value. As Rust is an expression-based language, any line ending with a `;` is considered as a statement (which almost always performs a side-effect) while a line that doesn't end with a `;` becomes an expression, which can very well be used as the last line of a function to return a value.

This also introduces us to a whole new world of programming where even an `if` block can return a value!

## It is very strict with variable references

Rust does let you work with references but it protects you from potential failures arising out of mishandling references by complaining a little too much so that you're careful with the code that you write while handling unsafe memory.

### Ownership

Only a single variable can hold a value. This means, copying a value from one variable to another is technically not allowed unless... it is cloned.

    let my_age = 15;
    let your_age = my_age;

    println!("your_age: {}", your_age);
    println!("my_age: {}", my_age);

The above code is not supposed to work, if you go by the previously mentioned rule, but it does and it's only because the value `15` is a scalar value that can be easily implicitly cloned by the Rust compiler without much trouble.

However, if the value would have been of a compound type (like a `String` or more), the result of the assignment to `your_age` would have been different. The first variable would have lost access to the value with the value's ownership being transferred to the second variable.

Any code trying to access the value of the first variable at a later point in the program would then fail. Consider the example below:

    let my_name = String::from("Shepard");
    let your_name = my_name;

    println!("your_name: {}", your_name);
    println!("my_name: {}", my_name);

Because the first variable does not hold a value that is easily 'cloneable', the moment the re-assignment is performed, the value gets 'moved' to the second variable and hence accessing the first variable is not allowed anymore. It can be said that the first variable loses ownership of the value it used to possess before the re-assignment.

There could be a very easy way to make the above code work though: by explicitly performing a 'clone' operation.

        let your_name = my_name.clone();

Apart from moving ownership between variables, there are many other ways a variable can lose ownership to a value, one of which is when a variable is passed into a function. It is said that the variable goes out of scope. Once that happens, the value can only be accessed from the variable if either of the below is true:

1. **When the value is returned from the function being called:**

    Consider a function `introduce` that only prints a provided name:

        fn introduce(name: String) {
            println!("I'm {}", name);
        }

    When a name is passed to the function,

        let my_name = String::from("Shepard");
    
        introduce(my_name);
    
        println!("Like I said earlier, I'm {}", my_name);

    The above code fails as the variable `my_name` loses ownership to the value as soon as the function `introduce` is called.

    One cheap (but probably not the right) way to fix this is to return the value to the outside scope from within the function. The `introduce` function would then become:

        fn introduce(name: String) -> String {
            println!("I'm {}", name);
            name
        }

    and then we would also capture the returned value in a variable (probably with the same name?)

        let my_name = String::from("Shepard");

        let my_name = introduce(my_name);
    
        println!("Like I said earlier, I'm {}", my_name);

2. **A reference of the variable was passed in the first place:**

    This is called 'borrowing' a value, instead of 'moving'. Consider an `introduce` function that accepts a reference instead of a value:

        fn introduce(name: &String) {
            println!("I'm {}", name);
        }

    And then we pass in a reference to the name instead of the value itself:

        let my_name = String::from("Shepard");

        introduce(&my_name);
    
        println!("Like I said earlier, I'm {}", my_name);

    But then there are other limitations with passing around references and this needs to be done carefully as well.

### Only one mutable reference to a variable is allowed in a scope

A reference like the one we saw in the previous example cannot be used to change the value of the variable. For such cases, a 'mutable' reference needs to be passed around.

However, Rust imposes restrictions on that as well: you can only have one mutable reference to a variable per scope, just for safety.

The below would fail to compile:

    let my_name = String::from("Shepard");
    
    let ref1 = &mut my_name;
    let ref2 = &mut my_name;

And obviously, that's because Rust doesn't want you to get into trouble when the changes to the value pointed by the two references are performed from two different parties, thus potentially resulting in unexpected results.

### You cannot pass around a reference to something may not exist

Consider the below function that returns a reference to a variable that will soon be no longer existing

    function get_my_name() => &String {
        let my_name = String::from("Shepard");
        &my_name
    }

The variable `my_name` is only valid within the scope of the function and passing around the reference of a variable that will not exist is not a good idea.

### Only safe references are allowed

When Rust comes across a situation where an invalid memory is being accessed, the program fails instead of allowing the memory access and cause further damage.

    let numbers = [1, 2, 3, 4, 5];
    let index = 10;

    let number = numbers[index];

The above code fails at the point when an 'out-of-bounds' index is being used to fetch a value from the array.

## Some other notable great features of the Rust eco-system

1. **The language itself lets you code faster**

    Though the language might feel very difficult to initially begin with, there are features like implicit typing of variables that make it easier to work with those limitations. There are many similarities with older languages like 'C' but newer constructs like `tuple`s and `vector`s make it very useable in today's programming scene.

2. **Its tooling is awesome**

    Having spent over 8 years with [Node.js](http://nodejs.org) and then stepping into a systems programming language like Rust, I didn't expect an ecosystem this modern. I found many things that I could relate to:

    - [Npm](https://npmjs.com) -> [Cargo](https://github.com/rust-lang/cargo) (Build tool, package manager)
    - [package.json](https://docs.npmjs.com/files/package.json) -> [Cargo.toml](https://doc.rust-lang.org/cargo/reference/manifest.html) (Manifest file)
    - [npmjs.com](https://npmjs.com) -> [creates.io](https://crates.io) (Package registry to access thousands of useful crates)

    Packages would now be a crate, be it a binary or a library.

3. **`rustfmt`**

    [`rustfmt`](https://github.com/rust-lang/rustfmt) is a tool for formatting Rust code according to a universally agreed-upon coding style. This would help developers focus on the logic of our programs rather than argue about how the code should be looking like. I've faced a lot of that in the JavaScript world where there are more standards than one could think of.

## Much more to learn about Rust...

It's been a few months since I've started looking into Rust but given my learning schedule which has tremendously slowed down since we moved into this year, I could not dive deeper into the language yet.

I did create [a playground for myself](https://github.com/myTerminal/project-euler-solutions/tree/master/solutions/rust) though, where I plan to practice the language and am hoping to create some useful tool with Rust soon.
