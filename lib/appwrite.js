import { Account, Client, Databases, ID, Avatars, Query } from 'react-native-appwrite';

export const appwriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.it.rentconnect',
    projectId: '66bedfb0002c881e3b44',
    databaseId: '66bee1c9002f2d920e38',
    userCollectionId: '66bee21b00355f8422e7',
    propertyCollectionId: '66c019680027b036fee7',
    storageId: '66c01db800351409076a'
}   


// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) 
    .setProject(appwriteConfig.projectId)
    .setPlatform(appwriteConfig.platform)

    const account = new Account(client);
    const avatars = new Avatars(client);
    const databases = new Databases(client)

export const createUser = async (email, password, username) => {
      try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        )
        if(!newAccount) throw Error;
        const avatarUrl = avatars.getInitials(username)

        await signIn(email, password);

        const newUser = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                username,
                avatar: avatarUrl
            }
        )
        return newUser;
      } catch (error) {
        console.log(error);
        throw new Error(error); 
      }
    }

export const signIn = async(email, password) => {
        try {
            const session = await account.createEmailPasswordSession(email, password)
            return session;
        } catch (error) {
            throw new Error(error );
        }
    }

export const getCurrentUser = async () => {
    try {
        const currentAccount = await account.get();

        if(!currentAccount) throw Error; 

        const currentUser = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            [Query.equal('accountId', currentAccount.$id)]
        )
        if(!currentUser) throw Error;

        return currentUser.documents[0];
    } catch (error) {
        console.log(error);
    }
}