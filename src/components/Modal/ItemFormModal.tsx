import ButtonSvg from '../shared/ButtonSvg';
import { ReactComponent as CloseIcon } from '../../assets/close.svg';
import { useFormik } from 'formik';
import { ModalProps } from '../../types';
import { useEffect, useRef } from 'react';

function ItemFormModal({
  onClose,
  onSubmit,
  headerText,
  buttonText,
  initialValues,
  httpError,
}: ModalProps) {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    ref.current?.select();
  }, []);

  const formik = useFormik({
    initialValues,
    validate: (values) => {
      const errors: { title?: string; description?: string } = {};
      if (!values.title) {
        errors.title = 'Please enter item title';
      }

      return errors;
    },
    onSubmit,
  });

  const isErrored = formik.touched.title && formik.errors.title;

  return (
    <form
      onSubmit={formik.handleSubmit}
      role="dialog"
      aria-labelledby="modalTitle"
      className="flex min-h-[var(--modal-height)] flex-col gap-4 rounded-lg bg-gray-100 p-4"
    >
      <div className="flex w-full items-center justify-between border-b border-b-gray-300 pb-4">
        <h2 id="modalTitle" className="text-xl font-bold">{headerText}</h2>
        <ButtonSvg onClick={onClose} Svg={CloseIcon} label="Close" />
      </div>
      <div className="flex flex-col gap-1">
        <label className="block font-medium text-gray-600" htmlFor="title">
          Title
        </label>
        <input
          id="title"
          name="title"
          type="text"
          ref={ref}
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={formik.isSubmitting}
          aria-label="Item Title"
          className={`w-full rounded-md border border-gray-300 p-2 focus:outline-indigo-700 ${
            isErrored ? 'border-red-500 focus:outline-red-700' : ''
          }`}
        />
        {isErrored && (
          <div className="text-xs text-red-500" aria-live="assertive">
            {formik.errors.title}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label
          className="block font-medium text-gray-600"
          htmlFor="description"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          rows={3}
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={formik.isSubmitting}
          aria-label="Item Description"
          className="w-full resize-none rounded-md border border-gray-300 p-2 focus:outline-indigo-700"
        />
      </div>
      {httpError && <div className="text-xs text-red-500" aria-live="assertive">{httpError}</div>}
      <div className="mt-auto flex justify-between gap-4 md:justify-end">
        <button
          type='button'
          className="rounded-lg border border-gray-600 px-6 py-2 text-gray-600 focus:outline-indigo-700"
          onClick={onClose}
        >
          Cancel
        </button>
        <button
          className="rounded-lg bg-indigo-600 px-6 py-2 text-white focus:bg-indigo-800 focus:outline-indigo-600"
          type="submit"
        >
          {buttonText}
        </button>
      </div>
    </form>
  );
}

export default ItemFormModal;
