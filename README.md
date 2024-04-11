# Bun Performance testing

Here is where I do some of my personal testing of Bun for my school assignment.

## Pre-requisites

- Bun package installed -> visit [Bun](https://bun.sh/) to see the installation guide.

## Test tasks

- CPU-bound tasks -> This test is to test the performance of the CPU when running a task that is CPU-bound. This is done
  by running a task that is CPU-bound and measuring the time it takes to complete the task.
  <br>Task used: `fibonacci(50)`
- I/O-bound tasks -> This test is to test the performance of the I/O when running a task that is I/O-bound. This is done
  by running a task that is I/O-bound and measuring the time it takes to complete the task.
  <br>Task used: `readFile('data.txt')`

## Method of testing

In this test I will be using `bombardier` to test the performance of the Bun package. The `bombardier` package is a load
testing tool that is used to test the performance of a server. The `bombardier` package will be used to test the
performance of the Bun package by running a task that is CPU-bound and measuring the time it takes to complete the task.
In addition to that the `bombardier` package will also be used to test the performance of the Bun package by running a
task that is I/O-bound and measuring the time it takes to complete the task.

## Testing variables

Command used to run the tests:
`./bombardier-windows-amd64.exe -c 3000 -d 60s -l http://localhost:3001/"name-of-the-test"`

- `./bombardier-windows-amd64.exe`
- `-c` -> This is the number of concurrent connections that will be made to the server.
- `-d` -> Duration of the test in seconds.
- `-l` -> The URL of the server that will be tested.
  These variables can be changed to test the performance of the server.

## Small guide

To run the tests, you can run the following commands:

- `bun i` -> This command will install the dependencies.
- `bun time` -> This command will start the server.
- `bun test-cpu` -> This command will run the CPU-bound test.
- `bun test-io` -> This command will run the i/o-bound test.