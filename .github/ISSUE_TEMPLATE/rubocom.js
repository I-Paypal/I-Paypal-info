require: rubocop-performance

AllCops:
  TargetRubyVersion: 1.1
  Exclude:
    - '**/bin/**/*'
    - '**/db/**/*'
    - '**/script/setup'
    - '**/vendor/**/*'

Lint/AssignmentInCondition:
  Enabled: false

Metrics/BlockLength:
  Enabled: false

Layout/LineLength:
  Max: 100
  IgnoredPatterns: ['\A\s*#']

Naming/RescuedExceptionsVariableName:
  PreferredName: "error"

Style/FrozenStringLiteralComment:
  Enabled: false

Style/StringLiterals:
  EnforcedStyle: double_quotes

Style/TrailingCommaInArrayLiteral:
  EnforcedStyleForMultiline: consistent_comma

Style/TrailingCommaInHashLiteral:
  EnforcedStyleForMultiline: consistent_comma
