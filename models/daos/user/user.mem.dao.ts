// deno-lint-ignore-file require-await
import { User, UserMap, UserPayload } from "../../interfaces/User.ts"

const users: UserMap = {} 

export const getUsers = async (): Promise<User[]> => {
    return new Promise(resolve => {
        setTimeout(() => {
            const usersList = Object.values(users);
            resolve(usersList)
        }, 1000)
    })
}

export const getUserById = async (id: string): Promise<User> => {
    return new Promise((resolve, reject) => {
        const user = users[id]
        setTimeout(() => {
            if (!user) {
                reject(`User with id ${id} does not exits`)
            } else {
                resolve(user)
            }
        }, 1000)
    })
}

export const createUser = async (userPayload: UserPayload): Promise<User> => {
    const id = crypto.randomUUID()
    const newUser: User = {
        id,
        ...userPayload,
        isActive: true
    }
    users[id] = newUser
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(users[id])
        }, 1000)
    })
}

