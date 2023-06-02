import { 
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from "class-validator";
import jimp from "jimp";

@ValidatorConstraint({ async: true })
export class IsBase64ImageConstraint implements ValidatorConstraintInterface {
	validate(uri: any, args: ValidationArguments) {
		try {
			const buf = Buffer.from(uri, "base64");
			const image = await jimp.read(buf);
			console.log(image)
			if (img.bitmap.width > 0 && img.bitmap.height > 0)
				return true;
			return false;
		} catch (e) {
			return false;
		}
	},
}

export function IsBase64Image(property: string, validationOptions?: ValidationOptions) {
	return function (object: Object, propertyName: string) {
		registerDecorator({
			name: 'IsBase64Image',
			target: object.constructor,
			propertyName: propertyName,
			constraints: [property],
			options: validationOptions,
			validator: IsBase64ImageConstraint
		});
	};
}
