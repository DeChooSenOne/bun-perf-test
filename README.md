# Bun Performance testing

Here is where I do some of my personal testing of Bun for my school assignment.

## Pre-requisites
- Bun package installed -> visit [Bun](https://bun.sh/) to see the installation guide.
-

## Test tasks

- CPU-bound tasks -> This test is to test the performance of the CPU when running a task that is CPU-bound. This is done
  by running a task that is CPU-bound and measuring the time it takes to complete the task.
  <br>Task used: `fibonacci(50)`
- I/O-bound tasks -> This test is to test the performance of the I/O when running a task that is I/O-bound. This is done
  by running a task that is I/O-bound and measuring the time it takes to complete the task.
  <br>Task used: `readFile('data.txt')`

## Method of testing

In this project I will be using the autocannon package to test the performance of the Bun package. The autocannon
package is a load testing tool that is used to test the performance of a server. In this case, I will be using it to
test the performance of the NPM package. The autocannon package will be used to test the performance of the NPM package
by running a task that is CPU-bound and measuring the time it takes to complete the task. In addition to that the
autocannon package will also be used to test the performance of the NPM package by running a task that is I/O-bound and
measuring the time it takes to complete the task.

## Small guide
To run the tests, you can run the following commands:
- `npm run cpu` -> This command will run the CPU-bound task test.