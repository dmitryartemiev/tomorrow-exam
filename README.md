# Tommorow exam

## Requirements

- Node.js and npm
- Make GNU

## Usage

1. Install required dependencies:

    ```sh
    $ make install
    ```

2. Now you can start by running:

    ```sh
    $ make watch
    ```

    This will spin up the Shopify CLI with development environment and webpack watcher

## Linting

To lint your js and css files run:

```sh
$ make lint
```

Or you can fix it in src folder

```sh
$ make lint-fix
```

## Deployment

You can build and deploy your theme by:

```sh
$ make deploy
```

You can also build production files and zip everything by:

```sh
$ make zip
```

## Workflow

Clone repository on which you are going to work. Request `config.yml` file or create it from sample.

Create or request `WIP-team` (name is optional) theme. Add it as `development` environment to `config.yml`. This is your WIP (work in progress) theme, so please use it for your dev working. Add `Staging theme` and `Live theme` (production) to your `config.yml`.

1. Create a new branch cloned from `main`  *(Note: this must be always `main`, not `staging` or any other feature branches)*.
    1. For example: `git checkout -b feature/nec-42-cart-reloading main`
    2. Branch name strategy: [Github Branch Naming Convention](https://dev.to/suprabhasupi/github-branch-naming-convention-2d4n).

2. Use `make deploy`.

3. Use `make watch` (with viewing your changes).

4. Write the code changes.
    1. Add your commits with several steps if possible.

5. QA the preview link yourself to make sure everything set up correctly.

6. Use `make build`.
    1. Make sure that the result of building is deployed.

7. Use `theme get` to pull your changes from customizer.

8. Push the commits to remote

9. Create a PR (pull request) to `staging` branch.
    1. Resolve all the conflicts if any.

10. Request reviewing to get approved.
    1. Fix all issues if any and go to step 10.

11. Merge your `branch` into `staging` branch, and push the `Staging theme`.

12. QA with `Staging theme`.

13. (Optional) Once `Staging theme` is approved by client, that will move to `Live theme` (production).

Every feature branches need to be separated individually so they can be picked up and merged to release versions independently. If you need to have feature branch based on the other, then you could merge that as dependency. Just optional.

For example, if you’re working on `feature/nec-42-cart-reloading` and need to pull up updates from `feature/nec-24-cart-products`, please follow the steps below

```sh
git checkout feature/nec-42-cart-reloading
git merge feature/nec-24-cart-products
```

## Staying up to date with Toolbox changes

Say you're building a new theme off Dawn but you still want to be able to pull in the latest changes from Toolbox, you can add a remote `upstream` pointing to this Theme Toolbox repository.

1. Navigate to your local theme folder.
2. Verify the list of remotes and validate that you have both an `origin` and `upstream`:
```sh
git remote -v
```
3. If you don't see an `upstream`, you can add one that points to Dmitry Artemiev Shopify Toolbox repository:
```sh
git remote add upstream https://github.com/dmitryartemiev/theme-toolbox.git
```
4. Pull in the latest Shopify Toolbox changes into your repository:
```sh
git fetch upstream
git pull upstream main
```
