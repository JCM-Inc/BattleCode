# BattleCode

Best your friends and be the master of code!

## Team

  - __Product Owner__: Marina Mcgrath (Middleend)
  - __Scrum Master__: Cain Watson (Frontend)
  - __Lead Engineer__: Jacques Metevier (Backend)

## Table of Contents

1. [How it works](#how-it-works)
2. [App Wireframe](#wireframe)
3. [Architecture](#architecture)
4. [Database](#database)
5. [Tech Stack](#tech-stack)
6. [Development](#development)
  6. [System Requirements](#system-requirements)
  6. [Installation](#installation)
  6. [Simulate for Mobile](#simulate-mobile)
7. [Contributing](#contributing)

## <a name="how-it-works"></a>How it Works

> Bringing fast paced fun to coding.
BattleCodes lets you solve programming challenges in a race against friends. The first to write code that fufills all the requirements wins!


## <a name="wireframe"></a>App Wireframe
![final-wireframe](images/wireframe.png)

## <a name="live-app-wireframe"></a>Live App Wireframe
![real-wireframe]()

## <a name="Database"></a>Database
![database](images/db.png)

## <a name="tech-stack"></a>Tech Stack
![final-tech-tack](images/stack-no-socketio.png)

## <a name="development"></a>Development
Setting up a development environment requires global installations of node, react-native, and CodePush - as well as the latest version of XCode or Android Studio for either iOS or Android development


### <a name="system-requirements"></a>1. System Requirements

* Globally installed [node](https://nodejs.org/en/) >= 4.0

## <a name="installation"></a>2. Installation

On the command prompt run the following commands

```sh
$ git clone https://github.com/Javacrypts/BattleCode.git

$ cd BattleCode/

$ npm install

$ cd public/

$ bower install


```

If React Native < 0.29

```sh
$ rnpm link
```

If React Native >= 0.29

```sh
$ react-native link
```

**For Local Database:**

Grubbr uses **Nodal** which requires a global installation of PostGres.   Installation instructions are provided [here](https://wiki.postgresql.org/wiki/Detailed_installation_guides)

To run local database server:

```
$ cd grubbr-api

$ npm install

$ nodal db:bootstrap
```

## <a name="simulate-mobile"></a>3. Simulate for Mobile Device

**Running on iOS**

* Install the latest version of **XCode** and its dependencies

*	Run the following command in your terminal

```sh
$ react-native run-ios
```
**Running on Android**

* Install the latest version of **Android Studio** or **Android SDK**

*	Make sure you have an **Android emulator** installed and running.

*	Run the following command in your terminal

```sh
$ react-native run-android
```

## <a name="contributing"></a>4. Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.