# bs-react-intl-extractor-bin

macOS, Linux and Windows binaries for [bs-react-intl-extractor].

[bs-react-intl-extractor] extracts messages for localization from [ReScript] or [Reason] source files.
This assumes that you are using the [bs-react-intl] 2.x bindings for [react-intl].

## Installation

This package may be installed globally or locally with either `npm` or `yarn`.

For example, run

```sh
npm install -g bs-react-intl-extractor-bin
```

for global installation.

## Usage

After global installation, `bs-react-intl-extractor` will be available in your path. Run e.g.

```sh
bs-react-intl-extractor src
```

to extract messages from all Reason source files below `src`.

For more information, see the [bs-react-intl-extractor] repo.

[rescript]: https://rescript-lang.org/
[bs-react-intl]: https://github.com/alexfedoseev/bs-react-intl
[bs-react-intl-extractor]: https://github.com/cknitt/bs-react-intl-extractor
[react-intl]: https://github.com/yahoo/react-intl
[reason]: https://reasonml.github.io
