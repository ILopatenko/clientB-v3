//IMPORT SECTION
//  Import supertest - HTTP Client that allows us to create and send a request from a test framework to server
import supertest from 'supertest';
//  Import dotenv package - to work with environmental project's variables
import 'dotenv/config';
//Create a new Class for authHelper - will store response from a server in response property (variable) all the methods (functions) that related to auth
class LocalHelper {
  constructor() {
    this.DB = {
      users: [
        {
          firstName: 'Rhudi',
          lastName: 'Steele',
          email: '#Rhudi-Steele@gmz.com',
          password: 'xijcXLcSPm;,bAP',
          agreement: true,
          id: null,
          lastToken: null,
          emailConfLink: null,
        },
      ],
      clients: [],
      vendors: [],
      orders: [],
    };
    this.testData = {
      firstnames: [
        'Emma',
        'Olivia',
        'Ava',
        'Sophia',
        'Charlotte',
        'Mia',
        'Amelia',
        'Harper',
        'Evelyn',
        'Abigail',
        'Emily',
        'Elizabeth',
        'Mila',
        'Ella',
        'Avery',
        'Sofia',
        'Camila',
        'Aria',
        'Scarlett',
        'Victoria',
        'Madison',
        'Luna',
        'Grace',
        'Chloe',
        'Penelope',
        'Layla',
        'Riley',
        'Zoey',
        'Nora',
        'Lily',
        'Eleanor',
        'Hannah',
        'Lillian',
        'Addison',
        'Aubrey',
        'Ellie',
        'Stella',
        'Natalie',
        'Zoe',
        'Leah',
        'Hazel',
        'Violet',
        'Aurora',
        'Savannah',
        'Audrey',
        'Brooklyn',
        'Bella',
        'Claire',
        'Skylar',
        'Liam',
        'Noah',
        'William',
        'James',
        'Oliver',
        'Benjamin',
        'Elijah',
        'Lucas',
        'Mason',
        'Logan',
        'Alexander',
        'Ethan',
        'Jacob',
        'Michael',
        'Daniel',
        'Henry',
        'Jackson',
        'Sebastian',
        'Aiden',
        'Matthew',
        'Samuel',
        'David',
        'Joseph',
        'Carter',
        'Owen',
        'Wyatt',
        'John',
        'Jack',
        'Luke',
        'Jayden',
        'Dylan',
        'Grayson',
        'Levi',
        'Isaac',
        'Gabriel',
        'Julian',
        'Mateo',
        'Anthony',
        'Jaxon',
        'Lincoln',
        'Joshua',
        'Christopher',
        'Andrew',
        'Theodore',
        'Caleb',
        'Ryan',
        'Asher',
        'Nathan',
        'Thomas',
        'Leo',
      ],
      lastNames: [
        'Smith',
        'Johnson',
        'Williams',
        'Jones',
        'Brown',
        'Davis',
        'Miller',
        'Wilson',
        'Moore',
        'Taylor',
        'Anderson',
        'Thomas',
        'Jackson',
        'White',
        'Harris',
        'Martin',
        'Thompson',
        'Garcia',
        'Martinez',
        'Robinson',
        'Clark',
        'Rodriguez',
        'Lewis',
        'Lee',
        'Walker',
        'Hall',
        'Allen',
        'Young',
        'Hernandez',
        'King',
        'Wright',
        'Lopez',
        'Hill',
        'Scott',
        'Green',
        'Adams',
        'Baker',
        'Gonzalez',
        'Nelson',
        'Carter',
        'Mitchell',
        'Perez',
        'Roberts',
        'Turner',
        'Phillips',
        'Campbell',
        'Parker',
        'Evans',
        'Edwards',
        'Collins',
        'Stewart',
        'Sanchez',
        'Morris',
        'Rogers',
        'Reed',
        'Cook',
        'Morgan',
        'Bell',
        'Murphy',
        'Bailey',
        'Rivera',
        'Cooper',
        'Richardson',
        'Cox',
        'Howard',
        'Ward',
        'Torres',
        'Peterson',
        'Gray',
        'Ramirez',
        'James',
        'Watson',
        'Brooks',
        'Kelly',
        'Sanders',
        'Price',
        'Bennett',
        'Woo',
        'Barnes',
        'Ross',
        'Henderson',
        'Coleman',
        'Jenkins',
        'Perry',
        'Powell',
        'Long',
        'Patterson',
        'Hughes',
        'Flores',
        'Washington',
        'Butler',
        'Simmons',
        'Foster',
        'Gonzales',
        'Bryant',
        'Russell',
        'Griffin',
        'Diaz',
        'Hayes',
      ],
      emailDomains: [
        'yahoo.com',
        'gmail.com',
        'google.com',
        'hotmail.com',
        'me.com',
        'aol.com',
        'mac.com',
        'live.com',
        'comcast.com',
        'googlemail.com',
        'msn.com',
        'hotmail.co.uk',
        'yahoo.co.uk',
        'facebook.com',
        'verizon.net',
        'att.net',
        'gmz.com',
        'mail.com',
        'pasv.us',
      ],
      latinAlphabetLowerCase: [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z',
      ],
      latinAlphabetUpperCase: [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z',
      ],
      numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      symbols: [
        '!',
        '@',
        '#',
        '$',
        '%',
        '^',
        '&',
        '*',
        '(',
        ')',
        '-',
        '_',
        '=',
        '+',
        '[',
        ']',
        '{',
        '}',
        '/',
        '|',
        ';',
        ':',
        "'",
        '"',
        ',',
        '<',
        '.',
        '>',
        '~',
        '?',
      ],
      emailSymbols: [
        '!',
        '#',
        '$',
        '%',
        '^',
        '&',
        '*',
        '-',
        '_',
        '=',
        '+',
        '{',
        '}',
        '/',
        '|',
        ';',
        ':',
        "'",
        '.',
        '~',
        '?',
      ],
      fullSetOfCharacters: [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z',
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z',
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        '!',
        '@',
        '#',
        '$',
        '%',
        '^',
        '&',
        '*',
        '(',
        ')',
        '-',
        '_',
        '=',
        '+',
        '[',
        ']',
        '{',
        '}',
        '/',
        '|',
        ';',
        ':',
        "'",
        '"',
        ',',
        '<',
        '.',
        '>',
        '~',
        '?',
      ],
    };
    this.testPath = {
      user: {
        register: {
          success: {
            statusCode: 201,
            bodyMessage:
              'User created successfully. Please check your email and verify it',
          },
          theSameCred: {
            statusCode: 409,
            bodyMessage: 'User with this e-mail exists',
          },
        },
        login: {
          success: {
            statusCode: 200,
            bodyMessage: 'Auth success',
          },
          error: {
            email: 'trulala@tralala.com',
            password: 'trulala23@!',
            statusCode: 400,
            bodyMessage: 'Auth failed',
          },
        },
        emailConfirmarion: {
          success: {
            statusCode: 200,
            bodyMessage: 'Email confirmed. Success',
          },
          error: {
            statusCode: 400,
            bodyMessage: 'Email not confirmed',
          },
        },
      },
      client: {
        create: {
          success: {
            statusCode: 200,
            bodyMessage: 'Client created',
          },
        },
        getByID: {
          success: {
            statusCode: 200,
            bodyMessage: 'Get Client by id ok',
          },
        },
        delete: {
          success: {
            statusCode: 200,
            bodyMessage: 'Client deleted',
          },
        },
        getAll: {
          success: {
            statusCode: 200,
            bodyMessage: 'ClientSearch ok',
          },
        },
      },
    };
  }

  getRandomIntFromZeroUpToX(x) {
    return Math.floor(Math.random() * x);
  }

  getRandomItemFromArray(arrayOfItems) {
    return arrayOfItems[this.getRandomIntFromZeroUpToX(arrayOfItems.length)];
  }

  generateRandomCombination(length, set) {
    if (!length || length < 5) {
      length = 5;
    }
    let result = '';
    for (let i = 0; i < length; i++) {
      result += this.getRandomItemFromArray(set);
    }
    return result;
  }

  generateRandomDataForRegistration() {
    const firstName = this.getRandomItemFromArray(this.testData.firstnames);
    const lastName = this.getRandomItemFromArray(this.testData.lastNames);
    const domain = this.getRandomItemFromArray(this.testData.emailDomains);
    const email = `${firstName.toLowerCase()}_${this.generateRandomCombination(
      8,
      this.testData.numbers.concat(this.testData.emailSymbols)
    )}_${lastName.toLowerCase()}@${domain}`;
    const password = this.generateRandomCombination(
      10,
      this.testData.fullSetOfCharacters
    );
    return {
      firstName,
      lastName,
      email,
      password,
      agreement: true,
      id: null,
      lastToken: null,
      emailConfLink: null,
    };
  }

  saveUserToLocalDB(object) {
    this.DB.users.push(object);
  }

  updateLocalUserAfterLogin(response) {
    const indexInArray = this.findIndexOfGivenUserInLocalDBbyEMAIL(
      response.payload.user.email
    );
    this.DB.users[indexInArray].id = response.payload.userId;
    this.DB.users[indexInArray].lastToken = response.payload.token;
    let base = response.payload.confirmEmailLink.slice(0, 42);
    let last = response.payload.confirmEmailLink[42];
    let newLast;
    if (typeof +last === 'number' && +last <= 8) {
      newLast = +last + 1;
    }
    if (last === '9') {
      newLast = 'a';
    }
    if (last === 'a') {
      newLast = 'b';
    }
    if (last === 'b') {
      newLast = 'c';
    }
    if (last === 'c') {
      newLast = 'd';
    }
    if (last === 'd') {
      newLast = 'e';
    }
    if (last === 'e') {
      newLast = 'f';
    }
    if (last === 'f') {
      newLast = '0';
    }
    let link =
      process.env.BASE_URL +
      base +
      last +
      '/' +
      this.DB.users[indexInArray].id.slice(0, 23) +
      newLast;
    this.DB.users[indexInArray].emailConfLink = link;
  }

  findIndexOfGivenUserInLocalDBbyEMAIL(email) {
    let indexIn;
    this.DB.users.forEach((el, ind) => {
      if (el.email.toLowerCase() === email) {
        indexIn = ind;
      }
    });
    return indexIn;
  }

  //CLIENT
  generateRandomDataForNewClient() {
    const firstName = this.getRandomItemFromArray(this.testData.firstnames);
    const lastName = this.getRandomItemFromArray(this.testData.lastNames);
    const domain = this.getRandomItemFromArray(this.testData.emailDomains);
    const fullName = `${firstName} ${lastName}`;
    const email = `#client_${firstName}-${lastName}@${domain}`;
    const phone = `${this.getRandomIntFromZeroUpToX(
      9
    )}${this.getRandomIntFromZeroUpToX(9)}${this.getRandomIntFromZeroUpToX(
      9
    )}-${this.getRandomIntFromZeroUpToX(9)}${this.getRandomIntFromZeroUpToX(
      9
    )}${this.getRandomIntFromZeroUpToX(9)}-${this.getRandomIntFromZeroUpToX(
      9
    )}${this.getRandomIntFromZeroUpToX(9)}-${this.getRandomIntFromZeroUpToX(
      9
    )}${this.getRandomIntFromZeroUpToX(9)}`;
    return {
      name: fullName,
      email,
      phone,
      id: null,
      notes: `This is a summary about client ${fullName}: email is "${email}", phone is "${phone}"`,
    };
  }
  //Add a new client to local DB
  addNewClientToLocalDB(clientObject) {
    this.DB.clients.push(clientObject);
  }

  generateEmailConfirmationLinkClientBasev2(id, s = 1) {
    /* console.clear();
    console.log(`START HERE !!!!`);
    console.log(`INPUT IS: `, { id, s }); */
    /*  console.log(
      `#1 - split ID into 2 parts (firstPart = 11 symbols and second part = 13 symbols)`
    ); */
    const firstPart = id.slice(0, 13);
    //console.log(`firstPart is `, firstPart);
    const secondPart = id.slice(13);
    //console.log(`secondPart is `, secondPart);
    //console.log(`#2 - convert SecondPart to decimal`);
    let secondPartDecimal = parseInt(secondPart, 16);
    //console.log(`secondPart decimal is`, secondPartDecimal);
    //console.log(`#3 - increase SecondPartDecimal by  step`);
    let secondPartDecimalIncreased = secondPartDecimal + s;
    //console.log(`secondPartIncreased decimal is`, secondPartDecimalIncreased);
    //console.log(`#4 - convert secondPartIncreased decimal to HEX`);
    let secondPartNewHex = secondPartDecimalIncreased.toString(16);
    //console.log(`secondPartNewHex is`, secondPartNewHex);
    //console.log(`#5 - add first part to second`);
    let newID = firstPart + secondPartNewHex;
    //console.log(`final ans is`, ans);
    //console.log(`#6 - generate final email confirmation link`);
    let link = `${process.env.BASE_URL}/user/verify/email/${id}/${newID}`;
    //console.log(`final link is`, link)
    return link;
  }
}
//Export the Class
export default LocalHelper;
