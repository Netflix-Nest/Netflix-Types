# @netflix-clone/shared

[![npm version](https://img.shields.io/npm/v/@netflix-clone/shared.svg?color=blue&logo=npm)](https://www.npmjs.com/package/@netflix-clone/shared)
[![npm downloads](https://img.shields.io/npm/dm/@netflix-clone/shared.svg?color=green)](https://www.npmjs.com/package/@netflix-clone/shared)
[![license](https://img.shields.io/github/license/netflix-clone/shared.svg)](./LICENSE)

**Shared DTOs, Interfaces, and Constants for Netflix Clone**  
A reusable package designed to be consumed by **Backend (NestJS)**, **Frontend (Next.js)**, and **Mobile (React Native)** clients.

---

## Features

-   Common **DTOs** (Data Transfer Objects) for API communication
-   Shared **Interfaces** for strong typing across services
-   Centralized **Constants & Enums** for consistency
-   Works out-of-the-box with **NestJS**, **Next.js**, and **React Native**
-   Designed for **scalable microservices architecture**

---

## Installation

```bash
npm install @netflix-clone/types
# or
yarn add @netflix-clone/types
```

## Usage

DTOs

```bash
import { CreateUserDto } from '@netflix-clone/types';

const dto = new CreateUserDto();
dto.email = "user@example.com";
dto.password = "superSecret";
```

Interfaces

```bash
import { User } from '@netflix-clone/types';

const user: User = {
  id: "1",
  email: "user@example.com"
};

```

Constants

```bash
import { ROLES } from '@netflix-clone/types';

console.log(ROLES.ADMIN); // "admin"
```

---

Tips: Use this package to keep your Backend, Web, and Mobile apps always in sync with shared types.

## License

This project is licensed under the terms of the MIT License.
See the LICENSEfile for details.
