# Real Time Collaborative Code Editor - RTCCE

## Prerequisites
- Install Go on your system [https://golang.org/dl/](https://golang.org/dl/)
- Install Protocol Buffers compiler (`protoc`) [https://grpc.io/docs/protoc-installation/](https://grpc.io/docs/protoc-installation/)
- Node.js 18+ 

## Setup

First, install yarn globally if you haven't:
```bash
npm install -g yarn
```

Then enable corepack (with admin privileges):
```bash
corepack enable
```

Finally, run the setup script:
```bash
yarn install
```

Now you can start on a terminal the FE using:
```bash
yarn setup:frontend
yarn run dev:frontend
```
