import {Navigation} from 'react-native-navigation'

export const goToAuth = () => Navigation.setRoot({
    root: {
        bottomTabs: {
            id: 'BottomTabsId',
            children: [
                {
                    component: {
                        name: 'Home',
                        options: {
                            bottomTab: {
                                fontSize: 12,
                                text: 'Home',
                                icon: require('../src/assets/images/login.png'),
                                forceTitlesDisplay: true,

                            }
                        }
                    },
                },
                {
                    component: {
                        name: 'Category',
                        options: {
                            bottomTab: {
                                text: 'Category',
                                fontSize: 12,
                                icon: require('../src/assets/images/login.png'),
                                forceTitlesDisplay: true,
                            }
                        }
                    },
                },
                {
                    component: {
                        name: 'Setting',
                        options: {
                            bottomTab: {
                                text: 'Setting',
                                fontSize: 12,
                                icon: require('../src/assets/images/login.png'),
                                forceTitlesDisplay: true,
                            }
                        }
                    },
                },
                {
                    component: {
                        name: 'Profile',
                        options: {
                            bottomTab: {
                                text: 'Profile',
                                fontSize: 12,
                                icon: require('../src/assets/images/login.png'),
                                forceTitlesDisplay: true,
                            }
                        }
                    },
                },

            ],
        }
    }
});

export const goHome = () => Navigation.setRoot({
    root: {
        stack: {
            id: 'App',
            children: [
                {
                    component: {
                        name: 'Home',
                    }
                }
            ],
        }
    }
})