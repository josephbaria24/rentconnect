import { Account, Client, Databases, ID, Avatars, Query } from 'react-native-appwrite';

export const appwriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.it.rentconnect',
    projectId: '66bedfb0002c881e3b44',
    databaseId: '66bee1c9002f2d920e38',
    userCollectionId: '66bee21b00355f8422e7',
    propertyCollectionId: '66c9c502002c1fce4f91',
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
        if(!newAccount) throw Error('Failed to create new account');
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
    };

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
  
      if (!currentAccount) throw Error;
  
  
  
      // const currentUser = await databases.listDocuments(
  
      //   config.databaseId,
  
      //   config.userCollectionId,
  
      //   [Query.equal("accountId", currentAccount.$id)]
  
      // );
  
  
  
      // if (!currentUser) throw Error;
  
  
      // return currentUser.documents[0];
  
  
      return currentAccount;
  
    } catch (error) {
  
      throw new Error(error);
  
    }
  
  };

export const logoutUser = async () => {
    try {
      await account.deleteSession('current'); // Logs out the current session
    } catch (error) {
      throw new Error('Failed to log out');
    }
  };

export const getAllPosts = async () => {
  try {
    const posts = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.propertyCollectionId
    )
    return posts.documents;
  } catch (error) {
    throw new Error(error);
  }
}

export const getLatestPosts = async () => {
  try {
    const posts = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.propertyCollectionId,
      [Query.orderDesc('$createdAt')]
    )
    return posts.documents;
  } catch (error) {
    throw new Error(error);
  }
}
export const searchPosts = async (query) => {
  try {
    const posts = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.propertyCollectionId,
      [Query.search('description', query)]
    )
    return posts.documents;
  } catch (error) {
    throw new Error(error);
  }
}
